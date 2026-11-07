/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Recent_EditsInputs */

const zh_dashboard_recent_edits = /** @type {(inputs: Dashboard_Recent_EditsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近编辑`)
};

const en_dashboard_recent_edits = /** @type {(inputs: Dashboard_Recent_EditsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recently edited`)
};

/**
* | output |
* | --- |
* | "Recently edited" |
*
* @param {Dashboard_Recent_EditsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_recent_edits = /** @type {((inputs?: Dashboard_Recent_EditsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Recent_EditsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_recent_edits(inputs)
	return zh_dashboard_recent_edits(inputs)
});