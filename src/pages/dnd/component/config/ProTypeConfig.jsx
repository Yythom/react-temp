
import { Fragment, useState } from 'react';
import { Button, Input, Form, Space } from 'antd';

function ProTypeConfig({ changeProps }) {

    const onFinish = values => {
        console.log('Received values of form:', values);
        changeProps({ attr: 'list', value: values?.list || [], },)
    };


    return <Fragment>
        {/* 修改配置项 */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* <div style={{ width: '120px' }}> 内边距:</div>
            <Input
                type="text"
                placeholder='10'
                onBlur={(e) => {
                    changeProps({ attr: 'style', value: `${e.target.value / 2}px`, key: 'padding' },)
                }} /> */}

            <div style={{ width: '120px' }}> 添加type:</div>

            <Form className='antd-form' style={{ width: '100%' }} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                <Form.List name="list">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                <div>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'name']}
                                        fieldKey={[fieldKey, 'name']}
                                        rules={[{ required: true, message: 'name' }]}
                                    >
                                        <Input placeholder="Name" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'type']}
                                        fieldKey={[fieldKey, 'type']}
                                        rules={[{ required: true, message: 'type' }]}
                                    >
                                        <Input placeholder="type" />
                                    </Form.Item>
                                    <div className='iconfont icon-delete' onClick={() => remove(name)} ></div>
                                </div>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={'+'}>
                                    Add field
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        保存type
                    </Button>
                </Form.Item>
            </Form>

        </div>


    </Fragment >
}

export default ProTypeConfig;