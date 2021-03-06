import * as React from "react"
import { connect } from "react-redux"
import { RouteComponentProps } from "react-router";
import { bindActionCreators, Dispatch } from "redux";
import { RootState } from "../../state/rootReducer";

import MetricsContent from "../content/MetricsContent";

interface EditBomPageProps {
    className?: string;
}

interface PropsFromState {
    //
}

interface PropsFromDispatch {

}

type Props = EditBomPageProps & PropsFromState & PropsFromDispatch & RouteComponentProps<{id: string}>;
type State = never;

class MetricsPage extends React.PureComponent<Props, State> {
    
    public componentWillMount() {
        //
    }

    public componentWillUnmount() {
        //
    }

    public render() {
        return (
            <MetricsContent />
        )
    }
}

const mapStateToProps = (state: RootState): PropsFromState => ({
    //
})

const mapDispatchToProps = (dispatch: Dispatch<RootState>): PropsFromDispatch => bindActionCreators({
    //
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MetricsPage)