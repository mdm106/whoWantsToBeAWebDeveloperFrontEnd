import { connect } from "react-redux";
import Question from "./Question";

import { getQuestion } from "./../../data/actions/api";

import { updateDifficulty } from "./../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        playerName: state.playerName,
        currentQuestion: state.currentQuestion,
        currentDifficulty: state.currentDifficulty,
        isMuted: state.isMuted,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoad: () => dispatch(getQuestion()),
        handleDifficulty: () => dispatch(updateDifficulty()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);