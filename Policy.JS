class Policy {
	#name;
	#configuration;

	constructor(name) {
		this.#name = name;
	}

	get name() {
		return this.#name;
	}

	set name(name) {
		this.#name = name;
	}

	get configuration() {
		return this.#configuration;
	}

	set configuration(configuration) {
		this.#configuration = configuration;
	}
}

module.exports = Policy;
