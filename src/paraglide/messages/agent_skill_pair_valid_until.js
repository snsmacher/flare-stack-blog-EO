/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Agent_Skill_Pair_Valid_UntilInputs */

const zh_agent_skill_pair_valid_until = /** @type {(inputs: Agent_Skill_Pair_Valid_UntilInputs) => LocalizedString} */ (i) => {
	const formattedTimeZh = registry.datetime("zh", i?.time, { hour: "2-digit", minute: "2-digit", hour12: false });
	const formattedTimeEn = registry.datetime("zh", i?.time, { hour: "2-digit", minute: "2-digit" });return /** @type {LocalizedString} */ (`有效至 ${formattedTimeZh}`)
};

const en_agent_skill_pair_valid_until = /** @type {(inputs: Agent_Skill_Pair_Valid_UntilInputs) => LocalizedString} */ (i) => {
	const formattedTimeZh = registry.datetime("en", i?.time, { hour: "2-digit", minute: "2-digit", hour12: false });
	const formattedTimeEn = registry.datetime("en", i?.time, { hour: "2-digit", minute: "2-digit" });return /** @type {LocalizedString} */ (`Valid until ${formattedTimeEn}`)
};

/**
* | time | output |
* | --- | --- |
* | * | "Valid until {formattedTimeEn}" |
*
* @param {Agent_Skill_Pair_Valid_UntilInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_valid_until = /** @type {((inputs: Agent_Skill_Pair_Valid_UntilInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_Valid_UntilInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_valid_until(inputs)
	return zh_agent_skill_pair_valid_until(inputs)
});