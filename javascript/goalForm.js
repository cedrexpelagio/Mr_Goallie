import { Goal, Mission, Action } from "./modules/goalModel.js";
import {createMissionForm} from "./modules/formBuilder.js";

document.addEventListener("DOMContentLoaded", () => {

  const goalForm = document.querySelector('.form-section');
  const innerGoalForm = goalForm.querySelector('.form-section');

  // Goal Structure
  const goalTitle = document.getElementById('goal-title');
  const goalCategory = document.getElementById('goal-category');
  const goalDeadline = document.getElementById('goal-deadline');
  const goalDescription = document.getElementById('goal-description');

  const goals = [];

  function addActions(actionsArray, Action, missionIndex) {
    const actionCount = innerGoalForm.querySelectorAll('.action-form').length;

    for (let index = 0; index < actionCount; index++) {

      const actionTitle = document.getElementById(`action-title-${missionIndex}-${index}`);
      const actionDuration = document.getElementById(`action-duration-${missionIndex}-${index}`);

      if (actionTitle && actionDuration) {
        const action = new Action(actionTitle.value, actionDuration.value);
        actionsArray.push(action);
      }
    }

  }

  function addMissions(missionsArray, Mission, Action) {
    const missionCount = innerGoalForm.querySelectorAll('.form-nested-section').length;

    for (let index = 0; index < missionCount; index++) {

      const missionTitle = document.getElementById(`mission-title-${index}`);
      const missionDeadline = document.getElementById(`mission-deadline-${index}`);

      const mission = new Mission(missionTitle.value, missionDeadline.value);

      if (missionTitle && missionDeadline) {
        addActions(mission.actions, Action, index);
        missionsArray.push(mission);
      }
    }
  }

  createMissionForm();

  // 1. Goal Details Mockup
  goalTitle.value = "Earn ₱10K This Month";
  goalCategory.value = "finance";
  goalDeadline.value = "2026-04-30";
  goalDescription.value = "Complete side hustles and freelance projects to hit the monthly savings milestone.";

  goalForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const goal = new Goal(
      goalTitle.value,
      goalCategory.value,
      goalDeadline.value,
      goalDescription.value
    );

    addMissions(goal.missions, Mission, Action);

    goals.push(goal);

    console.log(goals);
  });
});