import { actionFormTemplate, missionFormTemplate} from "./forms.js";

const goalForm = document.querySelector('.form-section');
const innerGoalForm = goalForm.querySelector('.form-section');

function createActionForm(newMissionForm) {
    const missionIndex = newMissionForm.dataset.missionIndex;
    const actionCount = newMissionForm.querySelectorAll('.action-form').length;
    const newActionForm = newMissionForm.querySelector('.form-nested-sub-section');

    const newAction = document.createElement('div');
    newAction.classList.add('action-form');

    newAction.innerHTML = actionFormTemplate(missionIndex, actionCount);

    newActionForm.appendChild(newAction);

    const addActionBtn = newAction.querySelector('.btn-add-action');

    const actionTitle = document.getElementById(`action-title-${missionIndex}-${actionCount}`);
    const actionDuration = document.getElementById(`action-duration-${missionIndex}-${actionCount}`);

    actionTitle.value = "Try";
    actionDuration.value = 10;

    addActionBtn.addEventListener('click', () => {
        createActionForm(newMissionForm);
        addActionBtn.remove();
    });

}

function createMissionForm() {
    const missionCount = innerGoalForm.querySelectorAll('.form-nested-section').length;

    const newMissionForm = document.createElement('div');
    newMissionForm.classList.add('form-nested-section');
    newMissionForm.dataset.missionIndex = missionCount;

    newMissionForm.innerHTML = missionFormTemplate(missionCount);

    innerGoalForm.appendChild(newMissionForm);

    const addMissionBtn = newMissionForm.querySelector('.btn-add-mission');

    const missionTitle = document.getElementById(`mission-title-${missionCount}`);
    const missionDeadline = document.getElementById(`mission-deadline-${missionCount}`);

    missionTitle.value = "Try"
    missionDeadline.value = "2026-04-30";

    addMissionBtn.addEventListener('click', () => {
        createMissionForm();
        addMissionBtn.remove();
    });

    createActionForm(newMissionForm);

};

export { createMissionForm };