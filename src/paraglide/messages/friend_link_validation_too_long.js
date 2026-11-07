/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Friend_Link_Validation_Too_LongInputs */

const zh_friend_link_validation_too_long = /** @type {(inputs: Friend_Link_Validation_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最长${i?.max}字`)
};

const en_friend_link_validation_too_long = /** @type {(inputs: Friend_Link_Validation_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Maximum ${i?.max} characters`)
};

/**
* | max | output |
* | --- | --- |
* | * | "Maximum {max} characters" |
*
* @param {Friend_Link_Validation_Too_LongInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_link_validation_too_long = /** @type {((inputs: Friend_Link_Validation_Too_LongInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Link_Validation_Too_LongInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_link_validation_too_long(inputs)
	return zh_friend_link_validation_too_long(inputs)
});