import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "Penguin_Iceburgs"
})

export class Iceburg extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    school_name!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    members!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    location!: string;
}
