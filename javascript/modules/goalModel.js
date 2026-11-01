class GoalModel {

    #title;
    #deadline;

    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get deadline() {
        return this.#deadline;
    }

    set deadline(value) {
        this.#deadline = value;
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

    static #count = 0;

    constructor(title, deadline) {
        super(title, deadline);
        this.actions = [];
        Mission.#count++;
    }

    static get count() {
        return Mission.#count;
    }

}

class Action {

    static #count = 0;

    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
        Action.#count++;
    }

    static get count() {
        return Action.#count;
    }

}

export { Goal, Mission, Action };