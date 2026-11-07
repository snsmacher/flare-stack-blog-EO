/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, time: NonNullable<unknown> }} Agent_Skill_Pair_ConnectedInputs */

const zh_agent_skill_pair_connected = /** @type {(inputs: Agent_Skill_Pair_ConnectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已连接：${i?.name}，${i?.time}`)
};

const en_agent_skill_pair_connected = /** @type {(inputs: Agent_Skill_Pair_ConnectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Connected: ${i?.name}, ${i?.time}`)
};

/**
* | output |
* | --- |
* | "Connected: {name}, {time}" |
*
* @param {Agent_Skill_Pair_ConnectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_connected = /** @type {((inputs: Agent_Skill_Pair_ConnectedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_ConnectedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_connected(inputs)
	return zh_agent_skill_pair_connected(inputs)
});