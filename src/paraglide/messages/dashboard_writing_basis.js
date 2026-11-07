/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Writing_BasisInputs */

const zh_dashboard_writing_basis = /** @type {(inputs: Dashboard_Writing_BasisInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按新建文章、发布和保存的版本统计，以本地日期分天`)
};

const en_dashboard_writing_basis = /** @type {(inputs: Dashboard_Writing_BasisInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Counts new posts, publishes and saved revisions by local day`)
};

/**
* | output |
* | --- |
* | "Counts new posts, publishes and saved revisions by local day" |
*
* @param {Dashboard_Writing_BasisInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_writing_basis = /** @type {((inputs?: Dashboard_Writing_BasisInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Writing_BasisInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_writing_basis(inputs)
	return zh_dashboard_writing_basis(inputs)
});