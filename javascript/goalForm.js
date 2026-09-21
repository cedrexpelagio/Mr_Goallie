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

    const innerGoalForm = goalForm.querySelector('.form-section');

    const goals = [];

    function createActionForm(newMissionForm) {
        const missionIndex = newMissionForm.dataset.missionIndex;
        const actionCount = newMissionForm.querySelectorAll('.action-form').length;
        const newActionForm = newMissionForm.querySelector('.form-nested-sub-section');

        const newAction = document.createElement('div');
        newAction.classList.add('action-form');

        newAction.innerHTML = `
       <div class="nested-section-title">
         <span style="font-size: var(--text-sm);">3. Action Details</span>
         <span style="font-size: var(--text-xs); color: var(--color-text-muted);">Smallest Executable Unit</span>
       </div>

       <div class="form-group">
         <label for="action-title-${missionIndex}-${actionCount}" class="form-label">Action Title</label>
         <input 
           type="text" 
           id="action-title-${missionIndex}-${actionCount}" 
           name="action_title" 
           class="form-input" 
           placeholder="e.g. Deliver logo design project" 
           required
         >
       </div>

       <div class="form-group">
         <label for="action-duration-${missionIndex}-${actionCount}" class="form-label">Duration (in hours)</label>
         <input 
           type="number" 
           id="action-duration-${missionIndex}-${actionCount}" 
           name="action_duration" 
           class="form-input" 
           placeholder="e.g. 6" 
           min="0.25" 
           step="0.25" 
           required
         >
       </div>

       <button type="button" class="btn-add-repeater btn-add-action">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
           <line x1="12" y1="5" x2="12" y2="19"></line>
           <line x1="5" y1="12" x2="19" y2="12"></line>
         </svg>
         <span>+ Add another Action</span>
       </button>`;

        newActionForm.appendChild(newAction);

        const addActionBtn = newAction.querySelector('.btn-add-action');

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

        newMissionForm.innerHTML = `
        <div class="nested-section-title">
          <span>2. Mission Details</span>
          <span class="category-pill">Sub-objective</span>
        </div>

        <div class="form-group">
          <label for="mission-title-${missionCount}" class="form-label">Mission Title</label>
          <input 
            type="text" 
            id="mission-title-${missionCount}" 
            name="mission_title" 
            class="form-input" 
            placeholder="e.g. Freelance Gigs — ₱6,000" 
            required
          >
        </div>

        <div class="form-group">
          <label for="mission-deadline-${missionCount}" class="form-label">Mission Deadline</label>
          <input 
            type="date" 
            id="mission-deadline-${missionCount}" 
            name="mission_deadline" 
            class="form-input" 
            required
          >
        </div>

        <!-- 3. Nested Action Details Section -->
        <div class="form-nested-sub-section">
          
        </div>

        <button type="button" class="btn-add-repeater btn-add-mission">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>+ Add another Mission</span>
        </button>
    `;

        innerGoalForm.appendChild(newMissionForm);

        const addMissionBtn = newMissionForm.querySelector('.btn-add-mission');

        addMissionBtn.addEventListener('click', () => {
            createMissionForm();
            addMissionBtn.remove();
        });

        createActionForm(newMissionForm);

    };

    createMissionForm();

    // 1. Goal Details Mockup
    goalTitle.value = "Earn ₱10K This Month";
    goalCategory.value = "finance";
    goalDeadline.value = "2026-04-30";
    goalDescription.value = "Complete side hustles and freelance projects to hit the monthly savings milestone.";

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