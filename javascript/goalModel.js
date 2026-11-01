class GoalModel {

    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
    }
}

class Goal extends GoalModel {

    constructor(title, category, deadline, description) {
        super(title, deadline);
        this.category = category;
        this.description = description;
        this.missions = [];
    }

}

class Mission extends GoalModel {

    constructor(title, deadline) {
        super(title, deadline);
        this.actions = [];
    }
}

class Action {

    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
    }

}

export {Goal, Mission, Action};