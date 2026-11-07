/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_Direct_UnreachableInputs */

const zh_editor_video_direct_unreachable = /** @type {(inputs: Editor_Video_Direct_UnreachableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法读取该地址，将直接以它作为播放地址，也可另填播放地址`)
};

const en_editor_video_direct_unreachable = /** @type {(inputs: Editor_Video_Direct_UnreachableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not read this address. It will be used as the playback address; you can enter another below.`)
};

/**
* | output |
* | --- |
* | "Could not read this address. It will be used as the playback address; you can enter another below." |
*
* @param {Editor_Video_Direct_UnreachableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_direct_unreachable = /** @type {((inputs?: Editor_Video_Direct_UnreachableInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Direct_UnreachableInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_direct_unreachable(inputs)
	return zh_editor_video_direct_unreachable(inputs)
});