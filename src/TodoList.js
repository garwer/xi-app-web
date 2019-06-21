import React, { Component, Fragment } from 'react';

class TodoList extends Component {
    //构造函数优先执行
    constructor(props) {
        super(props);
        this.state = { //组件的状态
            inputValue: '',
            list: []
        }
    }

    render() {
        return  ( //必须在最外层包一层 可以使用Fragment占位符 jsx语法 {} 驼峰  map循环 根据数据项产生
           
            <Fragment>
                <div>Hello TodoList</div>
                 {/* 注释不建议用class 用className*/}
                <div><input value={this.state.inputValue}
                            onChange={this.handleInput.bind(this)}
                /> <button onClick={this.handleButton.bind(this)}>提交</button></div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                        return <li key={index} onClick={this.handleDelete.bind(this, index)}>{item}</li>
                    })
                    } 
                </ul>
            </Fragment>
        ) 
    }

    handleInput(e) {
        console.log(e);
        console.log(e.target.value);
        //this.state.inputValue = e.target.value; //不能用this.state引用 需setState
        this.setState({
            inputValue: e.target.value
        });
    };

    handleButton() {
        this.setState({
            list: [...this.state.list, this.state.inputValue]        //展开运算符 展开生成新的 进行合并
        })
    };

    handleDelete(index) {
        //immutable state不允许做改变 
        const list = [...this.state.list]; //拷贝
        list.splice(index, 1);
        this.setState({
            list: list
        })
    };
}

export default TodoList;