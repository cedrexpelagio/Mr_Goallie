function actionFormTemplate(missionIndex, actionCount) {

    const actionForm = `
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

    return actionForm;
}

function missionFormTemplate(missionCount){

    const missionForm = `
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

    return missionForm;

}

export { actionFormTemplate , missionFormTemplate};