#include <iostream>

int main() {
    int a, b;
    std::cin >> a >> b;

    int money;

    if (a >= 13) {
        money = b;
    } else if (a >= 6) {
        money = b / 2;
    } else {
        money = 0;
    }

    std::cout << money << std::endl;
}