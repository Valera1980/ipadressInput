
export enum EnumIpType {
    IPv4 = 'ipv4',
    IPv6 = 'ipv6'
}
export interface IModelAdress {
    readonly adress: string;
    readonly comment: string;
    readonly id: string | number;
    readonly isNew: boolean;
    readonly subnetMask: string;
    readonly type: EnumIpType;
}
export class ModelAdress implements IModelAdress {
    readonly adress: string;
    readonly comment: string;
    readonly id: number | string;
    readonly isNew: boolean;
    readonly subnetMask: string;
    readonly type: EnumIpType;
    constructor({
        adress = '',
        comment = '',
        id = null,
        isNew,
        type = EnumIpType.IPv4,
        subnetMask = '255.255.255.0'
    }: Partial<IModelAdress> = {}) {
        this.adress = adress;
        this.comment = comment;
        this.id = id;
        this.isNew = isNew;
        this.type = type;
        this.subnetMask = subnetMask;
    }

    clone(): ModelAdress {
        return new ModelAdress(this.serialize());
    }
    serialize(): IModelAdress {
        return {
            id: this.id,
            adress: this.adress,
            comment: this.comment,
            type: this.type,
            isNew: this.isNew,
            subnetMask: this.subnetMask
        };
    }
    serializeServer(): IModelAdress {
        return {
            id: this.isNew ? null : this.id,
            adress: this.adress.trim(),
            comment: this.comment.trim(),
            type: this.type,
            isNew: this.isNew,
            subnetMask: this.subnetMask
        };
    }
}
