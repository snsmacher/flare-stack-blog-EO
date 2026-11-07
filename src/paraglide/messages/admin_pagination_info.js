/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ startItem: NonNullable<unknown>, endItem: NonNullable<unknown>, totalItems: NonNullable<unknown> }} Admin_Pagination_InfoInputs */

const zh_admin_pagination_info = /** @type {(inputs: Admin_Pagination_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.startItem} - ${i?.endItem} 条 / 共 ${i?.totalItems} 条`)
};

const en_admin_pagination_info = /** @type {(inputs: Admin_Pagination_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Showing ${i?.startItem} - ${i?.endItem} of ${i?.totalItems}`)
};

/**
* | startItem | output |
* | --- | --- |
* | * | "Showing {startItem} - {endItem} of {totalItems}" |
*
* @param {Admin_Pagination_InfoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_pagination_info = /** @type {((inputs: Admin_Pagination_InfoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Pagination_InfoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_pagination_info(inputs)
	return zh_admin_pagination_info(inputs)
});