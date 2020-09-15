export class Covid {
    zipCd: string;
    counties: County[];
}

export class County {
    countyName: string;
    geo: Geo;
    historicData: HistoricData[];
}

export class Geo {
    rightTopLatLong: number;
    leftBottomLatLong: number;
    leftTopLatLong: number;
    rightBottomLatLong: number;
}

export class HistoricData {
    date: string;
    deathCt: number;
    positiveCt: number;
    recoveredCt: number;
}
