/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_ConflictInputs */

const zh_friend_apply_conflict = /** @type {(inputs: Friend_Apply_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`申请状态已变化，请返回并刷新状态后再试。`)
};

const en_friend_apply_conflict = /** @type {(inputs: Friend_Apply_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The application status has changed. Go back and refresh before trying again.`)
};

/**
* | output |
* | --- |
* | "The application status has changed. Go back and refresh before trying again." |
*
* @param {Friend_Apply_ConflictInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_conflict = /** @type {((inputs?: Friend_Apply_ConflictInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_ConflictInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_conflict(inputs)
	return zh_friend_apply_conflict(inputs)
});