import { StyleSheet } from "react-native";
import { POSITIONING, SIZES } from "../../../constants/theme";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    topBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        width: SIZES.width,
    },
    homeTitle: {
        color: '#000000',
        fontSize: 25,
        fontWeight: '600',
        fontFamily: 'Inter Regular',
    },
    exploreBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        opacity: 0.9,
        borderRadius: 38,
        width: SIZES.width * 0.8,
        height: SIZES.height * 0.06,
    },
    explore: {
        color: '#FCFCFC',
        fontFamily: 'TenorSans Regular',
        fontWeight: '400',
        fontSize: 16,
        textTransform: 'uppercase'
    },
})