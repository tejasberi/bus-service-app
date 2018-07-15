export interface BusServiceData {
    data: [
        {
            busData: Array<BusTripData>;
            date: string;
            organisation: string;
        }
    ];
}

export interface BusTripData {
    busId: string;
    deviationFromTimetable: number;
    routeVariant: string;
}
