import { Customer } from '../generated/graphql'
import { Sequelize, QueryTypes } from 'sequelize'
import { DataSource } from 'apollo-datasource'

class CustomerProvider extends DataSource {
    connection: Sequelize

    constructor (sequelize: Sequelize) {
        super();
        this.connection = sequelize
    }

    async getCustomerPerId(id: number): Promise<Customer> {
        return this.connection.query<Customer>('select CustomerId, CustomerGuid, LocatorId from CUSTOMER_MST where CustomerId = :customerId', {
            replacements: { customerId: id },
            type: QueryTypes.SELECT
        }).then((results) => { console.log('results', results); return results[0] })
    }
}

export default CustomerProvider