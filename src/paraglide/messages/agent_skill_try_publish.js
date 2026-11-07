/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Try_PublishInputs */

const zh_agent_skill_try_publish = /** @type {(inputs: Agent_Skill_Try_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查最近一篇草稿有哪些未发布的修改，确认后发布`)
};

const en_agent_skill_try_publish = /** @type {(inputs: Agent_Skill_Try_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check what unpublished changes the latest draft has, then publish after confirmation`)
};

/**
* | output |
* | --- |
* | "Check what unpublished changes the latest draft has, then publish after confirmation" |
*
* @param {Agent_Skill_Try_PublishInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_try_publish = /** @type {((inputs?: Agent_Skill_Try_PublishInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Try_PublishInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_try_publish(inputs)
	return zh_agent_skill_try_publish(inputs)
});