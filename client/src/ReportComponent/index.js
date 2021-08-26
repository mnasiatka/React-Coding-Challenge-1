import { ReportTypeString, ReportStateString, ReportState } from '../enums';
import { Link } from 'react-router-dom';
import './style.css'

export default function ReportComponent(props) {
    return (
        <div className="ReportComponent">
            <div className="text-container">
                <div className="text-col">
                    <span>Id: <span className="text-value">{props.id}</span></span>
                    <span>State: <span className="text-value">{ReportStateString[props.state]}</span></span>
                    <span><Link to={`/details/${props.id}`}>Details</Link></span>
                </div>
                <div className="text-col">
                    <span>Type: <span className="text-value">{ReportTypeString[props.type]}</span></span>
                    <span>Message: <span className="text-value">{props.message}</span></span>
                </div>  
            </div>
            <div className="button-container">
                <button onClick={() => props.updateReportStatus(props.id, ReportState.BLOCKED)}>Block</button>
                <button onClick={() => props.updateReportStatus(props.id, ReportState.RESOLVED)}>Resolve</button>
            </div>
        </div>
    )
}