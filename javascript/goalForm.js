document.addEventListener("DOMContentLoaded", () => {
    const goalForm = document.querySelector('.form-section');

    // Goal Structure
    const goalTitle = document.getElementById('goal-title');
    const goalCategory = document.getElementById('goal-category');
    const goalDeadline = document.getElementById('goal-deadline');
    const goalDescription = document.getElementById('goal-description');

    const missionTitle = document.getElementById('mission-title');
    const missionDeadline = document.getElementById('mission-deadline');

    const actionTitle = document.getElementById('action-title');
    const actionDuration = document.getElementById('action-duration');

    const missionForm = document.querySelector('.form-nested-section');
    const addMissionBtn = missionForm.querySelector('.btn-add-mission');
    const addActionBtn = document.querySelector('.form-nested-sub-section .btn-add-repeater');

    let missionCounter = 1;
    let actionCounter = 1;

    const goals = [];

    // 1. Goal Details Mockup
    goalTitle.value = "Earn ₱10K This Month";
    goalCategory.value = "finance";
    goalDeadline.value = "2026-04-30";
    goalDescription.value = "Complete side hustles and freelance projects to hit the monthly savings milestone.";

    // 2. Mission Details Mockup
    missionTitle.value = "Freelance Gigs — ₱6,000";
    missionDeadline.value = "2026-04-15";

    // 3. Action Details Mockup
    actionTitle.value = "Deliver logo design project";
    actionDuration.value = "6";

    goalForm.addEventListener('submit', (event) => {
        event.preventDefault();

        function GoalModel(title, deadline) {
            if (!new.target) {
                console.log("You forgot the 'new' operator buddy");
            }

            this.title = title;
            this.deadline = deadline;
        }

        function Goal(title, category, deadline, description) {

            if (!new.target) {
                console.log("You forgot the 'new' operator buddy");
            }

            GoalModel.call(this, title, deadline);
            this.category = category;
            this.description = description;
            this.missions = [];
        }

        function Mission(title, deadline) {
            if (!new.target) {
                console.log("You forgot the 'new' operator buddy");
            }

            GoalModel.call(this, title, deadline);
            this.actions = [];
        }

        Object.setPrototypeOf(Goal.prototype, GoalModel.prototype);
        Object.setPrototypeOf(Mission.prototype, GoalModel.prototype);

        function Action(title, duration) {
            if (!new.target) {
                console.log("You forgot the 'new' operator buddy");
            }

            this.title = title;
            this.duration = duration;
        }

        const goal = new Goal(goalTitle.value, goalCategory.value, goalDeadline.value, goalDescription.value);
        const mission = new Mission(missionTitle.value, missionDeadline.value);
        const action = new Action(actionTitle.value, actionDuration.value);

        console.log(goal);
        console.log(mission);
        console.log(action);
    });
});