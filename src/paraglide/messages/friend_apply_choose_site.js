/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_Choose_SiteInputs */

const zh_friend_apply_choose_site = /** @type {(inputs: Friend_Apply_Choose_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择站点`)
};

const en_friend_apply_choose_site = /** @type {(inputs: Friend_Apply_Choose_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a site`)
};

/**
* | output |
* | --- |
* | "Choose a site" |
*
* @param {Friend_Apply_Choose_SiteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_choose_site = /** @type {((inputs?: Friend_Apply_Choose_SiteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_Choose_SiteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_choose_site(inputs)
	return zh_friend_apply_choose_site(inputs)
});