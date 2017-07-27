import React, {Component}  from 'react';
import {connect} from 'react-redux';

import { Pagination, Row, Col } from 'antd';

import Note from '../note';

import {getNote} from './actions';

import './index.scss';

export const stateKey = "notes";
export const initialState = {};

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            count: 30
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        let {current, count} = this.state;
		this.props.getNote(current, count);
    }
    
    onChange(page, count) {
        this.setState({
            current: page,
            count: count
        });

        this.props.getNote(page, count);
    }

    render() {
        let {notes, total, pagination = true} = this.props;
        let {count, current} = this.state;
        
        return (
            <div>
                <div className="note-list">
                    <Row gutter={24}>
                        {
                            notes.map((note) => (
                                <Col sm={12} key={note.id}>
                                    <Note {...note} />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
                {
                    pagination && total ?
                    <div className="pagination">
                        <Pagination defaultCurrent={1} pageSize={count} current={current} total={total} 
                        onChange={this.onChange} /> 
                    </div>
                    : null
				}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state[stateKey] && state[stateKey].notes || [],
        total: state[stateKey] && state[stateKey].total || null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNote: (current, count) => {
            dispatch(getNote(current, count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);