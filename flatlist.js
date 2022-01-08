<FlatList
            data={allTransactions}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => this.fetchMoreTransactions(searchText)}
            onEndReachedThreshold={0.7}
          />
