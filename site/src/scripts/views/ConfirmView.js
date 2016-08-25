import React, { Component } from 'react';
import { Card, Row, Col, Confirm, Breadcrumb, Button } from '../components/impression';
import { CommenTable } from '../components/';

export default class ConfirmView extends Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            showConfirm1: false,
            showConfirm2: false,
            showConfirm3: false,
        };

        this.toggleConfirm1Handle = this.toggleConfirm1Handle.bind(this);
        this.toggleConfirm2Handle = this.toggleConfirm2Handle.bind(this);
        this.toggleConfirm3Handle = this.toggleConfirm3Handle.bind(this);
    }
    toggleConfirm1Handle(){
        this.setState({
            showConfirm1: !this.state.showConfirm1
        });
    }
    toggleConfirm2Handle(){
        this.setState({
            showConfirm2: !this.state.showConfirm2
        });
    }
    toggleConfirm3Handle(){
        this.setState({
            showConfirm3: !this.state.showConfirm3
        });
    }
    render(){
        let { showConfirm1, showConfirm2, showConfirm3 } = this.state;

        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h5>Basic</h5>
                    <Card block>
                       <Row>
                           <Col>
                               <Button theme="secondary" outline onClick={this.toggleConfirm1Handle}>warning</Button>
                           </Col>
                            <Col>
                               <Button theme="primary" outline onClick={this.toggleConfirm2Handle}>question</Button>
                           </Col>
                            <Col>
                               <Button theme="default" onClick={this.toggleConfirm3Handle}>danger</Button>
                           </Col>
                       </Row>
                    </Card>
                    <h5>API</h5>
                    <CommenTable
                        data = {[
                            ['onOkClick', '点击确认回调函数', 'function', ''],
                            ['onCancelClick', '点击取消回调函数', 'function', ''],
                            ['okText', '确认按钮显示文本', 'string', '确认'],
                            ['cancleText', '取消按钮显示文本', 'string', '取消'],
                            ['type', '弹框类型，可选值为 info、danger、warning', 'string', 'warning'],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    />
                </Card>
                { showConfirm1 &&
                    <Confirm onOkClick={this.toggleConfirm1Handle} onCancelClick={this.toggleConfirm1Handle}>
                        您确定删除消费记录？
                    </Confirm>
                }
                { showConfirm2 &&
                    <Confirm type="info" onOkClick={this.toggleConfirm2Handle} onCancelClick={this.toggleConfirm2Handle}>
                        您确定购买该航班机票？
                    </Confirm>
                }
                { showConfirm3 &&
                    <Confirm type="danger" onOkClick={this.toggleConfirm3Handle} onCancelClick={this.toggleConfirm3Handle}>
                        您确定注销该银行卡？
                    </Confirm>
                }
            </div>
        );
    }
}

ConfirmView.title = 'Confirm';