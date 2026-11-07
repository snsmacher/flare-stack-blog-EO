/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Step_InstallInputs */

const zh_agent_skill_step_install = /** @type {(inputs: Agent_Skill_Step_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装`)
};

const en_agent_skill_step_install = /** @type {(inputs: Agent_Skill_Step_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install`)
};

/**
* | output |
* | --- |
* | "Install" |
*
* @param {Agent_Skill_Step_InstallInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_step_install = /** @type {((inputs?: Agent_Skill_Step_InstallInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Step_InstallInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_step_install(inputs)
	return zh_agent_skill_step_install(inputs)
});