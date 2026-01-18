import { logEvent } from "./analytics";

const ENGAGEMENT_WEIGHTS = {
  page_view: 1,
  scroll_50_percent: 2,
  scroll_90_percent: 5,
  time_30_seconds: 3,
  time_60_seconds: 5,
  time_120_seconds: 10,
  resume_view: 10,
  resume_download: 25,
  project_click: 5,
  social_click: 8,
  contact_click: 20,
  multiple_sessions: 15,
};

class EngagementTracker {
  constructor() {
    this.score = 0;
    this.actions = [];
    this.sessionStart = Date.now();
    this.milestoneReached50 = false;
    this.milestoneReached100 = false;
    this.loadPreviousData();
  }

  loadPreviousData() {
    const stored = localStorage.getItem("engagement_data");
    if (stored) {
      try {
        const data = JSON.parse(stored);
        this.score = data.score || 0;
        this.actions = data.actions || [];
        if (data.lastVisit && (Date.now() - data.lastVisit > 30 * 60 * 1000)) {
             this.addAction("multiple_sessions");
        }
      } catch (e) {
        console.error("Failed to load engagement data", e);
      }
    }
  }

  addAction(actionType) {
    const weight = ENGAGEMENT_WEIGHTS[actionType] || 1;
    this.score += weight;
    this.actions.push({
      type: actionType,
      timestamp: Date.now(),
      weight,
    });
    this.save();
    this.checkMilestones();
  }

  save() {
    localStorage.setItem(
      "engagement_data",
      JSON.stringify({
        score: this.score,
        actions: this.actions.slice(-50), // Keep last 50 actions
        lastVisit: Date.now(),
      })
    );
  }

  checkMilestones() {
    if (this.score >= 50 && !this.milestoneReached50) {
      this.milestoneReached50 = true;
      logEvent("Engagement", "high_engagement", "score_50");
    }
    if (this.score >= 100 && !this.milestoneReached100) {
      this.milestoneReached100 = true;
      logEvent("Engagement", "very_high_engagement", "score_100");
    }
  }

  getScore() {
    return this.score;
  }

  getEngagementLevel() {
    if (this.score >= 100) return "highly_engaged";
    if (this.score >= 50) return "engaged";
    if (this.score >= 20) return "interested";
    return "casual";
  }
}

export const engagementTracker = new EngagementTracker();