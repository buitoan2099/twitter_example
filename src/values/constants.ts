import { Dimensions, Platform } from 'react-native'
export const Constants = {
    CORNER_RADIUS: 8, //Border radius
    BORDER_RADIUS: 56, //border radius avatar
    BORDER_WIDTH: 1,
    MARGIN: 4, //Margin
    PADDING: 4, //Padding
    MARGIN_LARGE: 8, //Margin large
    MARGIN_12: 12,
    MARGIN_X_LARGE: 16, //Margin x large
    PADDING_LARGE: 8, //PADDING large
    PADDING_X_LARGE: 16, //PADDING x large
    SMALL_CIRCLE: 60, //Circle fab : width height radius
    BIG_CIRCLE: 70,
    MARGIN_LOGIN: 72, //Margin login
    DIVIDE_HEIGHT_SMALL: 1,
    QUICK_ANSWER_HEIGHT: 40,
    DIVIDE_HEIGHT_MEDIUM: 2,
    DIVIDE_HEIGHT_LARGE: 4,
    WIDTH_TIMER_COUNTDOWN: 30,
    MARGIN_UPLOAD_WRITING: 50,
    MARGIN_UPLOAD_WRITING_SUBMIT: 70,
    PICKER_HEIGHT: 40,
    PAGE_SIZE: 20, //Page size for load list
    BUTTON_RADIUS: 20, //Radius corner
    STR_SPACE: " ",
    STR_BETWEEN: " - ",
    STR_BRACKET_LEFT: " (",
    STR_BRACKET_RIGHT: ") ",
    STR_TOKEN: ", ",
    TOP_AVATAR_PROFILE: 90,
    LEFT_AVATAR_PROFILE: 14,
    SHADOW: 4,
    SHADOW_BLUR: 16,
    ACTIVE_OPACITY: 0.7,
    SHADOW_OPACITY: 0.25,
    ELEVATION: 4,
    SHADOW_OFFSET_WIDTH: 0,
    SHADOW_OFFSET_HEIGHT: 4,
    SHADOW_OPACITY_BUTTON: 0.5,
    SHADOW_OPACITY_EDIT_TEXT: 0.08,
    MARGIN_XX_LARGE: 32,
    PADDING_XX_LARGE: 32,
    STATUS_BAR_HEIGHT: 18,
    MARGIN_TITLE_ONE_BTN: 28,
    PADDING_TITLE_ONE_BTN: 28,
    MARGIN_LARGE_TITLE_ONE_BTN: 56,
    PADDING_LARGE_TITLE_ONE_BTN: 56,
    HEIGHT_CARD_MEMBER: 70,
    AVATAR_WIDTH_HEIGHT: 68,
    HEIGHT_BUTTON: 52,
    WIDTH_BANK: 80,
    HEIGHT_BANK: 50,
    HEADER_HEIGHT: 56,
    NAV_HEIGHT: 50,
    OPACITY_50: 0.5,
    HEIGHT_HEADER_OFFSET_REFRESH: Platform.OS === 'ios' ? 0 : 44,
    MAX_WIDTH: Dimensions.get('screen').width,
    MAX_HEIGHT: Dimensions.get('screen').height,
    WINDOW_WIDTH: Dimensions.get('window').width,
    WINDOW_HEIGTH: Dimensions.get('window').height,
    LATITUDE_DEFAULT: 10.8030269,
    LONGITUDE_DEFAULT: 106.7220181
}