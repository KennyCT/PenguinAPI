import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "Penguin_Users"
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
    email!: string;

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

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password_hash!: string;
}
