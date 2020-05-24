export type UserType = {
    _id: string
    name: string
    email: string
    phone: string
    password?: string
    doctorRecords: {
        items: Array<string>
    }
}

export type SigninInputsType = {
    email: string
    password: string
}

export type SignupInputsType = {
    email: string
    password: string
    repassword: string
    phone: string
    isDoctor: boolean
    name: string
}


export type SigninResponseType = {
    token?: string
    user: UserType
}

export type MessageType = {
    msg: string
}

export type DoctorScheduleType = {
    date: string
    timeFrom: string
    timeTo: string
    patientsCount: number
}

export type DoctorScheduleResponseType = {
    _id: string,
    time: {
        from: string,
        to: string
    },
    date: string,
    patientsCount: number,
    doctorId: string,
    patientsArray: Array<string>
}
