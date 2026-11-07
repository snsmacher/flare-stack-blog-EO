/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ site: NonNullable<unknown>, code: NonNullable<unknown> }} Agent_Skill_Pair_PromptInputs */

const zh_agent_skill_pair_prompt = /** @type {(inputs: Agent_Skill_Pair_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`使用 flare-stack-blog skill 连接 ${i?.site}，配对码：${i?.code}`)
};

const en_agent_skill_pair_prompt = /** @type {(inputs: Agent_Skill_Pair_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Use the flare-stack-blog skill to connect to ${i?.site}. Pairing code: ${i?.code}`)
};

/**
* | output |
* | --- |
* | "Use the flare-stack-blog skill to connect to {site}. Pairing code: {code}" |
*
* @param {Agent_Skill_Pair_PromptInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_prompt = /** @type {((inputs: Agent_Skill_Pair_PromptInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_PromptInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_prompt(inputs)
	return zh_agent_skill_pair_prompt(inputs)
});