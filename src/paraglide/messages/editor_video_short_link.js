/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_Short_LinkInputs */

const zh_editor_video_short_link = /** @type {(inputs: Editor_Video_Short_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂不支持 b23.tv 短链接，请粘贴完整的视频链接`)
};

const en_editor_video_short_link = /** @type {(inputs: Editor_Video_Short_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`b23.tv short links aren't supported yet. Paste the full video link.`)
};

/**
* | output |
* | --- |
* | "b23.tv short links aren't supported yet. Paste the full video link." |
*
* @param {Editor_Video_Short_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_short_link = /** @type {((inputs?: Editor_Video_Short_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Short_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_short_link(inputs)
	return zh_editor_video_short_link(inputs)
});