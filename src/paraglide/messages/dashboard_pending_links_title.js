/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Pending_Links_TitleInputs */

const zh_dashboard_pending_links_title = /** @type {(inputs: Dashboard_Pending_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待审核友链`)
};

const en_dashboard_pending_links_title = /** @type {(inputs: Dashboard_Pending_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Friend links to review`)
};

/**
* | output |
* | --- |
* | "Friend links to review" |
*
* @param {Dashboard_Pending_Links_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_pending_links_title = /** @type {((inputs?: Dashboard_Pending_Links_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Pending_Links_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_pending_links_title(inputs)
	return zh_dashboard_pending_links_title(inputs)
});