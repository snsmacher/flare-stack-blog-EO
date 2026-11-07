/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_WaitingInputs */

const zh_agent_skill_pair_waiting = /** @type {(inputs: Agent_Skill_Pair_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待 agent 连接`)
};

const en_agent_skill_pair_waiting = /** @type {(inputs: Agent_Skill_Pair_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for the agent to connect`)
};

/**
* | output |
* | --- |
* | "Waiting for the agent to connect" |
*
* @param {Agent_Skill_Pair_WaitingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_waiting = /** @type {((inputs?: Agent_Skill_Pair_WaitingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_WaitingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_waiting(inputs)
	return zh_agent_skill_pair_waiting(inputs)
});