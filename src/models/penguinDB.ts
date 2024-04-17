import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "Penguin_Users"
})

export class Penguin extends Model {
    // class model attributes
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

    // class model functions
    public static async findByEmail(email: string): Promise<Penguin | null> {
    return await Penguin.findOne({ where: { email } });
    }
}
