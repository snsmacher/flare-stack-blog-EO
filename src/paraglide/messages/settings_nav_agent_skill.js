/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nav_Agent_SkillInputs */

const zh_settings_nav_agent_skill = /** @type {(inputs: Settings_Nav_Agent_SkillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Skill`)
};

const en_settings_nav_agent_skill = /** @type {(inputs: Settings_Nav_Agent_SkillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Skill`)
};

/**
* | output |
* | --- |
* | "Agent Skill" |
*
* @param {Settings_Nav_Agent_SkillInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_nav_agent_skill = /** @type {((inputs?: Settings_Nav_Agent_SkillInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nav_Agent_SkillInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_nav_agent_skill(inputs)
	return zh_settings_nav_agent_skill(inputs)
});