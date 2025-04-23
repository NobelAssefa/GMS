import React, { useState, useEffect } from 'react';
import './visitApprovalForm.css';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    TextField,
    Chip
} from '@mui/material';
import { format } from 'date-fns';

// Sample data
const sampleVisits = [
    {
        id: 1,
        guestName: 'John Doe',
        department: 'Information Technology',
        visitDate: '2024-03-25',
        duration: '2 hours',
        requester: 'Sarah Johnson',
        status: 'pending'
    },
    {
        id: 2,
        guestName: 'Alice Smith',
        department: 'Human Resources',
        visitDate: '2024-03-24',
        duration: '1 hour',
        requester: 'Mike Wilson',
        status: 'approved'
    },
    {
        id: 3,
        guestName: 'Bob Wilson',
        department: 'Finance',
        visitDate: '2024-03-26',
        duration: '3 hours',
        requester: 'Emily Brown',
        status: 'pending'
    },
    {
        id: 4,
        guestName: 'Emma Davis',
        department: 'Marketing',
        visitDate: '2024-03-23',
        duration: '2 hours',
        requester: 'James Lee',
        status: 'rejected'
    },
    {
        id: 5,
        guestName: 'Michael Johnson',
        department: 'Research & Development',
        visitDate: '2024-03-25',
        duration: '4 hours',
        requester: 'Lisa Chen',
        status: 'pending'
    }
];

export default function VisitApprovalForm() {
    const [visits, setVisits] = useState([]);
    const [selectedVisit, setSelectedVisit] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [approvalData, setApprovalData] = useState({
        status: '',
        comment: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Using sample data instead of API call
        setVisits(sampleVisits);
    }, []);

    const handleActionClick = (visit) => {
        setSelectedVisit(visit);
        setApprovalData({
            status: '',
            comment: ''
        });
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedVisit(null);
        setApprovalData({
            status: '',
            comment: ''
        });
    };

    const handleApprovalSubmit = async () => {
        if (!approvalData.status) {
            return;
        }

        setLoading(true);
        try {
            // Simulating API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Update local state
            setVisits(visits.map(visit => 
                visit.id === selectedVisit.id
                    ? { ...visit, status: approvalData.status }
                    : visit
            ));

            handleModalClose();
        } catch (error) {
            console.error('Error updating visit:', error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusChipColor = (status) => {
        switch (status.toLowerCase()) {
            case 'approved':
                return 'success';
            case 'rejected':
                return 'error';
            default:
                return 'warning';
        }
    };

    return (
        <div className="visit-approval-container">
            <TableContainer component={Paper} className="visit-table">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Guest Name</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Visit Date</TableCell>
                            <TableCell>Duration</TableCell>
                            <TableCell>Requester</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visits.map((visit) => (
                            <TableRow key={visit.id}>
                                <TableCell>{visit.guestName}</TableCell>
                                <TableCell>{visit.department}</TableCell>
                                <TableCell>
                                    {format(new Date(visit.visitDate), 'MMM dd, yyyy')}
                                </TableCell>
                                <TableCell>{visit.duration}</TableCell>
                                <TableCell>{visit.requester}</TableCell>
                                <TableCell>
                                    <Chip 
                                        label={visit.status.charAt(0).toUpperCase() + visit.status.slice(1)}
                                        color={getStatusChipColor(visit.status)}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    {visit.status.toLowerCase() === 'pending' && (
                                        <Button
                                            variant="contained"
                                            size="small"
                                            onClick={() => handleActionClick(visit)}
                                        >
                                            Review
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={modalOpen} onClose={handleModalClose} maxWidth="sm" fullWidth>
                <DialogTitle>
                    Review Visit Request
                </DialogTitle>
                <DialogContent>
                    {selectedVisit && (
                        <div className="approval-form">
                            <div className="visit-details">
                                <p><strong>Guest:</strong> {selectedVisit.guestName}</p>
                                <p><strong>Department:</strong> {selectedVisit.department}</p>
                                <p><strong>Visit Date:</strong> {format(new Date(selectedVisit.visitDate), 'MMM dd, yyyy')}</p>
                                <p><strong>Duration:</strong> {selectedVisit.duration}</p>
                                <p><strong>Requester:</strong> {selectedVisit.requester}</p>
                            </div>

                            <FormControl component="fieldset" className="status-radio-group">
                                <FormLabel component="legend">Decision</FormLabel>
                                <RadioGroup
                                    value={approvalData.status}
                                    onChange={(e) => setApprovalData({
                                        ...approvalData,
                                        status: e.target.value
                                    })}
                                >
                                    <FormControlLabel 
                                        value="approved" 
                                        control={<Radio />} 
                                        label="Approve" 
                                    />
                                    <FormControlLabel 
                                        value="rejected" 
                                        control={<Radio />} 
                                        label="Reject" 
                                    />
                                </RadioGroup>
                            </FormControl>

                            <TextField
                                label="Comment (optional)"
                                multiline
                                rows={4}
                                value={approvalData.comment}
                                onChange={(e) => setApprovalData({
                                    ...approvalData,
                                    comment: e.target.value
                                })}
                                fullWidth
                                margin="normal"
                            />
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose} disabled={loading}>
                        Cancel
                    </Button>
                    <Button 
                        onClick={handleApprovalSubmit}
                        variant="contained"
                        color="primary"
                        disabled={!approvalData.status || loading}
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
} 