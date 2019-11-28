import { Student } from './Student';
export class Sheet {
ID_SHEET: number;
description: number;
features: string;
issue: string;
KEY_WORDS: string;
title: string;
student: Student;
accepted: boolean;
REFUSE_REASON: string;
date: Date;
REQUEST_MODIFICATION: boolean;
featuresRequest: string;
issueRequest: string;
refuseModificationReason: string;
cancelProject: boolean;
acceptAnnulation: string;
refusAnnulation: string;
sheetStatus: sheetStatus;
}

export enum sheetStatus {
    ACCEPTED,
    REFUSED,
    DEFAULT
  }
