/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Agent_Skill_Pair_Revoke_DescInputs */

const zh_agent_skill_pair_revoke_desc = /** @type {(inputs: Agent_Skill_Pair_Revoke_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将立即删除「${i?.name}」获得的 API Key，该 agent 随即无法访问博客。`)
};

const en_agent_skill_pair_revoke_desc = /** @type {(inputs: Agent_Skill_Pair_Revoke_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The API Key issued to “${i?.name}” will be deleted at once, and the agent can no longer reach the blog.`)
};

/**
* | output |
* | --- |
* | "The API Key issued to “{name}” will be deleted at once, and the agent can no longer reach the blog." |
*
* @param {Agent_Skill_Pair_Revoke_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_revoke_desc = /** @type {((inputs: Agent_Skill_Pair_Revoke_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_Revoke_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_revoke_desc(inputs)
	return zh_agent_skill_pair_revoke_desc(inputs)
});