import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "Penguin Users"
})

export class Penguin extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    major!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    cohort!: number;
}
