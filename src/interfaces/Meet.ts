export interface Meet{
    id: string,
    participants: string[],
    listeners: string,
    startDate: string,
    endDate: string,
    sourceId: string,
    status: MeetStatus
}

type MeetStatus = 'ongoing' | 'ended';