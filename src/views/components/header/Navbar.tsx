import * as React from 'react';
import styled from 'styled-components';

import { Path } from "../../../constants/Path";

import FlexColWrapper from '../../wrappers/FlexColWrapper';

import Button from '../../controls/button/Button';
import { ColorType } from '../../controls/button/constants/ColorType';

interface Props {
    className?: string;
    location?: string;

    onDashboardClick: () => void;
    onMetricsClick: () => void;
    onTeamsClick: () => void;
    onDiscussionClick: () => void;
}

class Navbar extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {

        const {
            location,
            onDashboardClick,
            onMetricsClick,
            onTeamsClick,
            onDiscussionClick,
        } = this.props;

        return (
            <div id="subheader" className={this.props.className} >
                <FlexColWrapper>
                    <Button
                        colorType={ColorType.Secondary}
                        isPressed={location === Path.dashboard}
                        icon={"dashboard"}
                        height={60}
                        width={60}
                        onClick={onDashboardClick}
                    />
                    <Button
                        colorType={ColorType.Secondary}
                        isPressed={location === Path.metrics}
                        icon={"bar_chart"}
                        height={60}
                        width={60}
                        onClick={onMetricsClick}
                    />
                    <Button
                        colorType={ColorType.Secondary}
                        isPressed={location === Path.teams}
                        icon={"group"}
                        height={60}
                        width={60}
                        onClick={onTeamsClick}
                    />
                    <Button
                        colorType={ColorType.Secondary}
                        isPressed={location === Path.discussion}
                        icon={"comment"}
                        height={60}
                        width={60}
                        onClick={onDiscussionClick}
                    />
                </FlexColWrapper>
            </div>
        );
    }
}

export default styled(Navbar)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    flex: 1;

    width: 60px;
    max-width: 60px;
    min-width: 60px;

    font-weight: bold;

    background-color: ${props => props.theme.secondary};
    transition-duration: 0.2s;
`