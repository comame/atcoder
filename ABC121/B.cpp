// https://atcoder.jp/contests/abc121/tasks/abc121_b

#include <iostream>

int main() {
    int n, m, c;
    std::cin >> n >> m >> c;
    
    int b[m];
    for (int i = 0; i < m; i++) {
        std::cin >> b[i];
    }
   
    int count = 0;
    int sum = 0;
    for (int i = 0; i < n; i++) {
      sum = 0;
        for (int j = 0; j < m; j++) {
            int a;
            std::cin >> a;
            sum += a * b[j];
        }
        if (sum + c > 0) {
            count++;
        }
    }
    
    std::cout << count << std::endl;
}
