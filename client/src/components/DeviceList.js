import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Row } from 'react-bootstrap';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex"
               key={device.id}
        >
            {device.devices.map(device =>
                 <DeviceItem key={device.id} device={device}/>
                )}
        </Row>
    )
})

export default DeviceList
