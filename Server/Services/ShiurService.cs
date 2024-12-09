using Entities;
using Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services
{
    public class ShiurService : IShiurService
    {
        private readonly IShiurRepository _shiurRepository;

        public ShiurService(IShiurRepository shiurRepository)
        {
            _shiurRepository = shiurRepository;
        }

        public Task<IEnumerable<Shiur>> GetAllAsync()
        {
            return _shiurRepository.GetAllAsync();
        }

        public Task<Shiur> GetByIdAsync(int id)
        {
            return _shiurRepository.GetByIdAsync(id);
        }

        public Task<IEnumerable<Shiur>> GetByLengthAsync(int minLength, int maxLength)
        {
            return _shiurRepository.GetByLengthAsync(minLength, maxLength);
        }

        public Task<IEnumerable<Shiur>> GetByYearAsync(int year)
        {
            return _shiurRepository.GetByYearAsync(year);
        }

        public Task<IEnumerable<Shiur>> GetByRavIdAsync(int ravId)
        {
            return _shiurRepository.GetByRavIdAsync(ravId);
        }

        public Task AddAsync(Shiur shiur)
        {
            return _shiurRepository.AddAsync(shiur);
        }

        public Task UpdateAsync(Shiur shiur)
        {
            return _shiurRepository.UpdateAsync(shiur);
        }
    }
}
